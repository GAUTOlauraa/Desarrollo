import { Drawer } from 'expo-router/drawer';

export default function tabLayout() {
    return (
    <Drawer>
      <Drawer.Screen
        name="peliculas" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Lista peliculas',
          title: 'Listado de Peliculas',
        }}
      />
      <Drawer.Screen
        name="home" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'Home',
        }}
      />
    </Drawer>
  );
    
}

/* <Tabs ScreenOptions={{ tabBarActiveBackgroundColor: 'blue',}}>
    <Tabs.Screen name="settings"
        options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
    />
    <Tabs.Screen
        name="home"
        options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
    />

</Tabs> */