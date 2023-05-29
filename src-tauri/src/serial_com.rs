use serialport::{available_ports, SerialPort};
use std::time::Duration;

pub fn serial_ports() -> Vec<serialport::SerialPortInfo> {
    match available_ports() {
        Ok(ports) => {
            return ports;
        }
        Err(e) => {
            eprintln!("Error listing serial ports: {}", e);
            return Vec::new();
        }
    }
}

pub fn connect_serial(port_name: String) -> Box<dyn SerialPort> {
    let port = serialport::new(port_name, 115_200)
        .timeout(Duration::from_millis(10))
        .open()
        .expect("Failed to open port");

    port
}
