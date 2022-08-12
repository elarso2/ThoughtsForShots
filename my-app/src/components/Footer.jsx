import React from 'react';
import { Center, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export function Footer() {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  return (
    <footer>
      <div>
        <Center>
          <h4 >
            <Text as='em'>DISCLAIMER: </Text>
            By using this site you acknowledge that you are of legal
            drinking age. The Thoughts for Shots team does not encourage binge
            drinking or alcoholism. Please drink responsibly.
          </h4>
        
        </Center>

        
        <FontAwesomeIcon icon="fa-brands fa-square-github" />
        
      
      </div>
    </footer>
  );
}
