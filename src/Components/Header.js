import { Box, HStack } from "@chakra-ui/react";
const menu = [
    {
      url: "#Home",
      name: "Home"
    },
    {
      url: "#About",
      name: "About"
    },
    {
      url: "#Menu",
      name:"Menu"
    },
    {
      url: "#Reservations",
      name:"Reservations"
    },
    {
      url: "#OrderOnline",
      name:"Order Online"
    },
    {
      url: "#Login",
      name:"Login"
    }
    {
      url: "#Login1",
      name:"Login1"
    }

   
  ];

const Header = () =>{
    const menuList = menu.map((item,index)=>{
        return <Box key ={index} size="2px">
      <ul>
        <li className="menu">
          <a href={item.url} onClick={item.url}>{item.name}</a>
        </li>
      </ul> 
    </Box>
  })
    return(
      <Box 
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY = {0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#FFFFFF"
      >
        
        <Box color="white" maxWidth="1280px" margin="0 auto">
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"

          >
            <nav>
              {/* Add social media links based on the `socials` data */}
              <HStack spacing='24px'>
              <img src="Logo.svg" alt="logo"/>
              </HStack>
            </nav>
            <nav>
              <HStack spacing={8}>
                {/* Add links to Projects and Contact me section */}
                  {menuList}
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    );


}

export default Header