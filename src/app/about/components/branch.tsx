import Image from "next/image";

import company1 from "../../../../public/company-1.jpg"
import company2 from "../../../../public/company-2.jpg"
import company3 from "../../../../public/company-3.jpg"
import SmoothAnimatedSection from "@/app/components/animation";

const branchData =[
    {image:company1, heading:"New York, USA", p:`27 Division St,  New York NY 10002, USA`},
    {image:company2, heading:"Paris, France" , p:"22 Rue des Carmes 75005 Paris"},
    {image:company3, heading:"Jakarta, Indonesia", p:"2476 Raya Yogyakarta,89090 Indonesia"},
]
function Branch(){
    return(
       <section className="pb-7">
        <SmoothAnimatedSection>
        <div className="font-sans text-center">
            <h4 className="text-[14px] text-[#088178]">Evara Coporation</h4>
            <h1 className="text-[30px]">Our main branches <br />
            around the world</h1>
            <p className="text-[18px] text-[#088178]">At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium. <br /> ebitis nesciunt voluptatum dicta reprehenderit accusamus</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 p-7">
            {branchData.map((i,index)=>(
                <div
                key={index}
                 className="text-center">
                    <Image
                    src={i.image}
                    alt="pic"
                    className="h-[237px] w-[357px] rounded-lg pb-5 hover:cursor-pointer"/>
                    <h1 className="text-lg font-semibold">{i.heading}</h1>
                    <p className="text-[16px] text-[#088178]"> {i.p}</p>

                </div>
            ))}


        </div>
        </SmoothAnimatedSection>
       </section>
    )
}
export default Branch;