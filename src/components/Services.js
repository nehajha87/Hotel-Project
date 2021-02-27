import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaPizzaSlice} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free mocktails",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, delectus'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, delectus'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttle",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, delectus'
            },
            {
                icon:<FaPizzaSlice/>,
                title:"Free Room Service",
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, delectus'
            }
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services"/>
               <div className="services-center">
                   {this.state.services.map((item,index)=>{
                       return <article key={index} className="service">
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>
                   })}
               </div>
               
            </section>
        )
    }
}
