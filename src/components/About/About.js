import React from 'react'
import Button from '../Button-prime/Button'
import SubTitle from '../Text/SubTitle'
import Title from '../Text/Title'
import './about.scss'
import {motion} from 'framer-motion'

const About = () => {

    const animate = {
        hidden:{
            y: 100,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.2 }
        }),
    };

    return (
        <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{amout: 0.2, once: true,}}
        className='about'>
            <motion.div custom={1} variants={animate} className='about__title'>
                <Title about = 'Про себе'/>
            </motion.div>
            <motion.img custom={1} variants={animate} className='about__img' src='../../img/About.png'/>
            <motion.div custom={1} variants={animate} className='about__subtitle'>
                <SubTitle about='Дипломований реабілітолог зі стажем більше 10 років. З 2012 року почав займатися масажем, а вже з 2014 року практикую реабілітацію.Спеціалізуюся в лікувальному масажі від грудного віку до літнього, а також у реабілітації після інсульту, перелому хребта, спортивних травм та інших захворювань опорно-рухового апарату (ОРА). Попрацювавши в різних клініках Києва, я напрацював величезний досвід лікування ОРА, а також, на тлі цього, побудував власну методику лікування з комплексним підходом, що сприяє швидкому одужанню.'/>
            </motion.div>
            <motion.div custom={4} variants={animate} className='about__btn'>
                <Button anketa='Заповнити анкету'/>
            </motion.div>
        </motion.div>
    )
}

export default About
