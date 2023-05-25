import { Avatar, Button, Flex, Input } from '@chakra-ui/react'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import getFromLocalStorage from '../utils/getFromLocalStorage'

export default function EditForm(){
        const [firstName, setFirstName] = useState("")
        const [lastName, setLastName] = useState("")
        const [office, setOffice] = useState("")

        useEffect(()=>{
            const user = getFromLocalStorage('user')
            
            if(user != null){
                setFirstName(user.firstName)
                setLastName(user.lastName)
                setOffice(user.office)
            }

        },[])


    return <Flex direction='column' gap='35px' align='center' padding='20px' border='1px solid black' borderRadius='8px'>
                <Avatar src='https://bit.ly/broken-link' />
                <Input onChange={(e)=>setFirstName(e.target.value)} value={firstName}  placeholder='Enter your first name'/>
                <Input onChange={(e)=>setLastName(e.target.value)} value={lastName}  placeholder='Enter your last name'/>
                <Flex align='center' gap='10px'>
                <FontAwesomeIcon icon={faLocationDot} />
                <Input onChange={(e)=>setOffice(e.target.value)} value={office}  placeholder='Enter your office'/>
                </Flex>

                <Flex width='100%' justify='space-between'>
                    <Button>Cancel</Button>
                    <Button>Save</Button>
                </Flex>
                </Flex>


}