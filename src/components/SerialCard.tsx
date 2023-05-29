import { Text, Button, Paper } from "@mantine/core";

interface SerialCardProps {
  name: string;
}

export function SerialCard({ name }: SerialCardProps) {
  return (
    <Paper
      radius="md"
      withBorder
      p="sm"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Text ta="center" fz="lg" weight={600} mt="md">
        {name}
      </Text>
      <Button variant="default" fullWidth mt="md">
        Select
      </Button>
    </Paper>
  );
}
