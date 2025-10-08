import { Drawer } from 'expo-router/drawer';

export default function tabLayout() {
    return (
    <Drawer screenOptions={{drawerActiveTintColor: "#ffffffff", drawerActiveBackgroundColor: "#d2abf1ff"}}>
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: 'Home',
          title: 'Inicio',
        }}
      />
      <Drawer.Screen
        name="peliculas"
        options={{
          drawerLabel: 'Lista peliculas',
          title: 'Listado de Peliculas',
        }}
      />
      <Drawer.Screen
        name="login"
        options={{
          drawerLabel: 'Login',
          title: 'Iniciar Sesion',
        }}
      />
      <Drawer.Screen
        name="register"
        options={{
          drawerLabel: 'Register',
          title: 'Registrate',
        }}
      />
    </Drawer>
  );
    
}

{/* <Tabs ScreenOptions={{ tabBarActiveBackgroundColor: 'blue',}}>
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

</Tabs> */}