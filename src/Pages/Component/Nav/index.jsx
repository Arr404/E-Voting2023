
import {createRef, useEffect, useRef, useState} from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import {getUserToken} from "../../../utils/auth";
import {calonData, calonDataKomisariat} from "../../PilihPages/calonData";

/*--------------------
Menu
--------------------*/

const Menu = ({items}) => {
    const [user,setUser] = useState(getUserToken());
    const [isOpen, setOpen] = useState(false)
    const $root = useRef()
    const $indicator1 = useRef()
    const $indicator2 = useRef()
    const [ itemDatas, setItemDatas ] = useState([])
    useEffect(() => {
        console.log(user+"hoak")
        if(user === "fahrul"){
            setItemDatas(items.itemsAdmin)
            console.log(items.itemsAdmin)
        }else{
            setItemDatas(items.items)

        }

    }, [items, user]);



    //  const animate = () => {
    //     const menuOffset = $root.current.getBoundingClientRect()
    //     const activeItem = $items.current[active].current
    //     const { width, height, top, left } = activeItem.getBoundingClientRect()
    //
    //     const settings = {
    //         x: left - menuOffset.x,
    //         y: top - menuOffset.y,
    //         width: width,
    //         height: height,
    //         backgroundColor: items[active].color,
    //         ease: 'elastic.out(.7, .7)',
    //         duration: .8
    //     }
    //
    //     gsap.to($indicator1.current, {
    //         ...settings,
    //     })
    //
    //     gsap.to($indicator2.current, {
    //         ...settings,
    //         duration: 1
    //     })
    // }
    //

    //
    //
    // useEffect(() => {
    //     animate()
    //     window.addEventListener('resize', animate)
    //
    //     return (() => {
    //         window.removeEventListener('resize', animate)
    //     })
    // }, [active])

    return (
        <>
        <div
            ref={$root}
            className="menu"
        >
            <input type="checkbox" id="active"/>
                <label htmlFor="active" className="menu-btn"><span/></label>
                <label htmlFor="active" className="close"/>
                <div className="wrapper">
                    <ul>
                        {itemDatas.map((item, index) => (
                            <Link to={item.href}>
                                <li>
                                    <a
                                        key={item.name}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>


            {/*<div className="nav-overlay">*/}
            {/*    <Hamburger toggled={isOpen} toggle={isClickNav} />*/}
            {/*    <div className="menu-list" style={{display: isOpen ? 'block' : 'none' }}>*/}
            {/*{items.map((item, index) => (*/}
            {/*    <IconContext.Provider value={{ size: 30 }}>*/}
            {/*    /!*<HiCog/>*!/*/}
            {/*    <div className=""></div>*/}
            {/*        <br/>*/}
            {/*    <a*/}
            {/*        key={item.name}*/}
            {/*        ref={$items.current[index]}*/}
            {/*        className={`item ${active === index ? 'active' : ''}`}*/}
            {/*        onMouseEnter={() => {*/}
            {/*            setActive(index)*/}
            {/*        }}*/}
            {/*        href={item.href}*/}
            {/*    >*/}
            {/*        {item.name}*/}
            {/*    </a>*/}
            {/*    </IconContext.Provider>*/}
            {/*))}*/}
            {/*    </div>*/}

            {/*</div>*/}
            <div
                ref={$indicator1}
                className="indicator"
            />
            <div
                ref={$indicator2}
                className="indicator"
            />
        </div>
        </>
    )
}

/*--------------------
Items
--------------------*/






export default Menu;

