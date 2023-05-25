import { Avatar, Flex, Text } from '@chakra-ui/react'
import { faArrowRotateRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getFromLocalStorage from '../utils/getFromLocalStorage'
import saveToLocalStorage from '../utils/saveToLocalStorage'
import { userData } from '../constants'

export default function ProfileCard(){
        const [firstName, setFirstName] = useState("")
        const [lastName, setLastName] = useState("")
        const [office, setOffice] = useState("")

        useEffect(()=>{
            const user = getFromLocalStorage('user')

            if(user == null){
                saveToLocalStorage('user', userData)
            }else{
                setFirstName(user.firstName)
                setLastName(user.lastName)
                setOffice(user.office)
            }
        },[])


    return <Flex direction='column' gap='35px' align='center' padding='20px' border='1px solid black' borderRadius='8px'>
               <Flex alignSelf='flex-end'>
                    <Link  to='/edit-my-profile'>
                        <FontAwesomeIcon icon={faArrowRotateRight} />
                    </Link>
               </Flex>
                <Avatar src='https://bit.ly/broken-link' />
                <Text>{firstName}</Text>
                <Text>{lastName}</Text>
                <Flex align='center' gap='10px'>
                <FontAwesomeIcon icon={faLocationDot} />
                <Text>{office}</Text>
                </Flex>
                </Flex>


}