#include <fcntl.h>
#include <iostream>
#include <sys/socket.h>
#include <unistd.h>

void network_io_example(int client_socket) {
  // User-space buffer to catch the incoming network stream
  char buffer[1024];

  // System call: Pull data from the OS kernel's TCP receive buffer
  ssize_t bytes_received = recv(client_socket, buffer, sizeof(buffer), 0);

  if (bytes_received > 0)
    std::cout << "Received " << bytes_received << " bytes from network.\n";
}


void terminal_io_example() {
  // This goes into the C++ stdout buffer, NOT the screen
  std::cout << "Processing data... ";

  sleep(5); // The screen stays blank for 2 seconds

  // std::endl adds a '\n' AND explicitly flushes the buffer to the OS
  std::cout << "Done!" << std::endl;
}

void file_io_example() {
  // The OS gives us a File Descriptor (a stream identifier)
  int fd = open("data.txt", O_RDONLY);

  // The Buffer: 4KB block of user-space memory
  char buffer[4096];

  // System call: OS copies up to 4096 bytes from kernel cache to our buffer
  size_t bytes_read = read(fd, buffer, sizeof(buffer));

  if (bytes_read > 0) {
    std::cout << "Read " << bytes_read << " bytes into memory.\n";
  }
  close(fd);
}

int main() {
  // Call whichever example you want to test here:
  // file_io_example();
  terminal_io_example();

  return 0;
}
