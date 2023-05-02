import React from 'react'
import { Project } from '../project/Project';
import { Element } from 'react-scroll';
import "./ProjectContainer.css"
import gameimg from "../images/projectimages/snake.png"


const ProjectContainer = () => {
    const projects =[
        {
            img:"https://th.bing.com/th/id/OIP.f-dnwnM4AzyR_R-hKmSg4AHaEI?pid=ImgDet&rs=1" ,
            title:"SnakeGame",
            desc:"It is a gaming platform I am created a snake game for childrens like and play for  platfomr",
            link:"https://relaxed-perlman-af1c75.netlify.app/",
        },
        {
            img:"https://th.bing.com/th/id/OIP.L9ob0ynHYFW_U8SAMkMExQHaE8?pid=ImgDet&rs=1",
            title:"RedStore Shopping website",
            desc:"It is a gaming platform I am created a snake game for childrens like and play for  platfomr",
            link:"https://drajkumard.github.io/red-store-shopping-website/",
        },
        {
            img:"https://th.bing.com/th/id/R.3de34fa21a4c39908d47609f4b28b128?rik=66pzAVXHdEtjmw&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0225%2f1491%2fproducts%2fV_Series_Plastic_Shopping_Cart_145L_45_degree_view_large_1024x1024.jpg%3fv%3d1393872869&ehk=cNdYcUmJqsBcYTrq74FtpVJWTyJTJAsYLJvg1J0qaNQ%3d&risl=&pid=ImgRaw&r=0",
            title:"MovieReview",
            desc:"It is a gaming platform I am created a snake game for childrens like and play for  platfomr",
            link:"https://drajkumard.github.io/red-store-shopping-website/",
        },
        
    
        
    ];
    return (
       <Element className="projectContainer" id="projects">
           <h1>Projects</h1>
           <p>Here are some projects which I done for making lives of
            people easy</p>
            
             <div className ="projectContainer_projects">
{
    projects.map((project,index) => {
        return (
            <Project
            key ={index} 
            img ={project.img}
            title ={project.title} 
            desc={project.desc} 
            link ={project.link}/>
                
        
        )
    }
    )
}
            </div> 
            
            
       </Element>
    )
}

export default ProjectContainer
