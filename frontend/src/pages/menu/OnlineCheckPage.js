import React from 'react';
import {useState, useContext} from 'react';
import Space from './component/Space';
import Process from './Page1/Process';
import ProcessRwd from './Page1/ProcessRwd';
import List from './Page1/List';
import Promo from './Page1/Promo';
import Pay from './Page1/Pay';
import MenuContext from './Context/MenuContext';









const OnlineCheckPage = (props) => {

        let[pricetotal1, setpricetotal1] = useState('')

        const dates = useContext(MenuContext)
        console.log(dates);
        return(
        <>
                <Space/>

                <Process/>

                <ProcessRwd/>

                <Space/>

                <List setpricetotal1={setpricetotal1}/>

                <Promo/>

                <Pay/>

        </>


)
}


export default OnlineCheckPage