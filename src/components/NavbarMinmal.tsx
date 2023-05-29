import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  rem,
} from "@mantine/core";
import {
  IconGauge,
  IconLogout,
  IconSwitchHorizontal,
  IconBroadcast,
  IconDeviceRemote,
  IconSailboat,
  IconScript,
  IconTerminal2,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface NavbarLinkProps {
  icon: React.FC<any>;
  label: string;
  active?: boolean;
  onClick?(): void;
  route?: string;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconBroadcast, label: "Connect", route: "/" },
  { icon: IconGauge, label: "Analytics", route: "/analytics" },
  { icon: IconDeviceRemote, label: "Control", route: "/controll" },
  { icon: IconTerminal2, label: "Console", route: "/console" },
];

export function NavbarMinimal() {
  const { classes, cx } = useStyles();
  const location = useLocation();
  const activeIndex = mockdata.findIndex(
    (link) => link.route === location.pathname
  );
  const [active, setActive] = useState(activeIndex);

  const links = mockdata.map((link, index) => (
    <Tooltip
      label={link.label}
      position="right"
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <Link
        to={link.route}
        onClick={() => setActive(index)}
        className={cx(classes.link, { [classes.active]: index === active })}
      >
        <link.icon size="1.2rem" stroke={1.5} />
      </Link>
    </Tooltip>
  ));

  return (
    <Navbar height={"100vh"} width={{ base: 80 }} p="md">
      <Center>
        <IconSailboat />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
