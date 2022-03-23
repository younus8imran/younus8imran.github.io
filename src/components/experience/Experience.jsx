import React from 'react'
import "./experience.css"
import { BsPatchCheckFill } from 'react-icons/bs'

export default function Experience() {
  return (
    <section id="experience">
        <h5>What skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>HTML</h4>
                        </div>
                        <small className="text-light">
                            Experienced
                        </small>                        
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>CSS</h4>
                        </div>
                        <small className="text-light">
                            Intermediate
                        </small>                        
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon' />

                        <div>

                            <h4>Bootstrap</h4>
                        </div>
                        <small className="text-light">
                            Intermediate
                        </small>                        
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>

                            <h4>JavaSript</h4>
                        </div>
                        <small className="text-light">
                            Experienced
                        </small>                        
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon' />

                        <div>

                            <h4>Tailwind</h4>
                        </div>
                        <small className="text-light">
                            Experienced
                        </small>                        
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>

                            <h4>React</h4>
                        </div>
                        <small className="text-light">
                            Experienced
                        </small>                        
                    </article>
                </div>
            </div>
            <div className="experience__backend">
            <h3>Backend Development</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>

                            <h4>Python (Django)</h4>
                        </div>
                        <small className="text-light">
                            Experienced
                        </small>                        
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>

                            <h4>Node JS</h4>    
                        </div>
                        <small className="text-light">
                            Intermediate
                        </small>                        
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>

                            <h4>MongoDB</h4>
                        </div>
                        <small className="text-light">
                            Intermediate
                        </small>                        
                    </article>
                    <article className="experience__details">
                        <BsPatchCheckFill className='experience__details-icon' />
                        <div>

                         <h4>MySQL</h4>
                        </div>
                        <small className="text-light">
                            Experienced
                        </small>                        
                    </article>

                </div>
                

            </div>
        </div>
    </section>
  )
}
