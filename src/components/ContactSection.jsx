import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react"
import {cn} from "../lib/util"

export const ContactSection = () => {

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30"
    >
        {/* Main div */}
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center ">
            Get In <span className="text-primary">Touch</span>
        </h2>
         
         <p className="p-4 text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
           I'm always excited to connect with fellow creatives, potential collaborators, and anyone 
           interested in discussing new opportunities. Whether you have a project in mind, want to 
           explore a partnership, or simply want to chat about design and development, I'd love to hear 
           from you. Drop me a message and let's create something amazing together.
         </p>

         {/* first part of the div that is contact information  */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
               <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
               <div className="space-y-6 justify-center">
                  <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary"/>
                      </div>
                      <div>
                          <h4 className="font-medium ">Email </h4>
                            <a 
                            href="mailto:sahildangi0801@gmail.com" 
                            className="text-muted-foreground hover:text-primary transition-colors"> 
                              sahildangi0801@gmail.com
                            </a>
                      </div>
                  </div>
                  <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10">
                          <Phone className="h-6 w-6 text-primary"/>
                      </div>
                      <div>
                          <h4 className="font-medium ">Phone</h4>
                            <a 
                            href="tel:+919992812699" 
                            className="text-muted-foreground hover:text-primary transition-colors"> 
                              +(91) 992812699
                            </a>
                      </div>
                  </div>
                  <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10">
                          <MapPin className="h-6 w-6 text-primary"/>
                      </div>
                      <div>
                          <h4 className="font-medium ">Location</h4>
                            <a 
                            className="text-muted-foreground hover:text-primary transition-colors"> 
                              Gurugram,Haryana
                            </a>
                      </div>
                  </div>
               </div>
                 
                <div className="pt-8">
                  <h4 className="font-medium mb-4">Connect with me.</h4>
                    <div className="flex space-x-4 justify-center">
                      <a href="" target="_blank">
                       <Linkedin />
                       </a> 
                     <a href="" target="_blank">
                     <Twitter />
                    </a>  
                    </div>
                </div>
             </div>
            
            {/* Second section for a form in main div */}
             <div className="bg-card p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form className="space-y-6">
                    <div>
                        <label 
                          htmlFor="name" 
                          className="block text-sm font-medium mb-2"
                          >
                              You Name</label>
                        <input 
                           type="text"
                           id="name"
                           name="name"
                           required
                           className="w-full py-3 px-4 rounded-md border border-input bg-backgound focus:outline-hidden focus:ring-2 focus:ring-primary"
                           placeholder="Tony Stark..."
                        />
                    </div>
                    <div>
                        <label 
                          htmlFor="email" 
                          className="block text-sm font-medium mb-2"
                          >
                              Your Email</label>
                        <input 
                           type="email"
                           id="email"
                           name="email"
                           required
                           className="w-full py-3 px-4 rounded-md border border-input bg-backgound focus:outline-hidden focus:ring-2 focus:ring-primary"
                           placeholder="tony@gmail.com"
                        />
                    </div>
                    <div>
                        <label 
                          htmlFor="message" 
                          className="block text-sm font-medium mb-2"
                          >
                              Your Message</label>
                        <textarea 
                           type="text"
                           id="message"
                           name="message"
                           required
                           className="w-full py-3 px-4 rounded-md border border-input bg-backgound focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                           placeholder="Hello!, I would like to talk about..."
                        />
                    </div>
                    {/* we used cn funtion because we want to give condition in css so with help of cn funcion we can send css after comma */}
                    <button type="submit" 
                           className={cn("cosmic-button w-full flex item-center justify-center gap-2",
                                       
                       )}><Send size={18}/></button>
                </form>

             </div>  


         </div>
       </div> 
    </section>
}