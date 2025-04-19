import { Phone, Mail, MapPin } from "lucide-react"

          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <a href="tel:+919901712001" className="hover:text-primary">+91 9901712001</a>
                <br />
                <a href="tel:+919902342001" className="hover:text-primary">+91 9902342001</a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:info@futuredoctoredu.com" className="hover:text-primary">
                info@futuredoctoredu.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <address className="not-italic">
                #79khb colony, 2nd phase<br />
                opposite Karnataka bank,<br />
                Gopal, Shimoga - 577205
              </address>
            </div>
          </div> 