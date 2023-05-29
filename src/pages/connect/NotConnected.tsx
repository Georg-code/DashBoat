import { Button, Container, Flex, NativeSelect, Center } from "@mantine/core";
import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";

const NotConnected = () => {
  const [serialPorts, setSerialPorts] = useState([]);

  const getSerialPorts = async () => {
    setSerialPorts(await invoke("serial"));
  };

  useEffect(() => {
    getSerialPorts();
  }, []);

  return (
    <>
      <Center>
        <Container size="sm">
          <h1>No connection</h1>
          <p>
            Search for possible Serial Ports to connect to the Autonomous
            sailboat
          </p>

          <NativeSelect
            data={
              serialPorts.length == 0 ? ["No serial ports found"] : serialPorts
            }
            label="Select serial port"
            placeholder="Select serial port"
          />

          <Button
            variant="default"
            mt="sm"
            mr="sm"
            onClick={async () => getSerialPorts()}
          >
            Reload
          </Button>
          <Button variant="subtle" mt="sm">
            Connect
          </Button>
        </Container>
      </Center>
    </>
  );
};

export default NotConnected;
