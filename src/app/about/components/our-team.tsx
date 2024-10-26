import Image from "next/image";
import avtar1 from "../../../../public/avatar-1.jpg"
import avtar2 from "../../../../public/avatar-2.jpg"
import avtar3 from "../../../../public/avatar-3.jpg"
import avtar4 from "../../../../public/avatar-4.jpg"
import SmoothAnimatedSection from "@/app/components/animation";


const team =[
    {image:avtar1, heading:"Patric Adams",span:"CEO & Co-Founder"},
    {image:avtar2, heading:"Patric Adams",span:"CEO & Co-Founder"},
    {image:avtar3, heading:"Patric Adams",span:"CEO & Co-Founder"},
    {image:avtar4, heading:"Patric Adams",span:"CEO & Co-Founder"},
];





function Team(){
    return(
        <section className="font-sans p-10 border-b-2">
          <SmoothAnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">
  {/* Text Section */}
  <div className="text-center sm:text-left pb-5">
    <h4 className="text-[#088178] text-lg">Our Team</h4>
    <h1 className="text-[24px] font-semibold">Top team of experts</h1>
    <p className="text-[16px]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      Ratione optio perferendis sequi mollitia quis autem ea cupiditate possimus!
    </p>
  </div>

  {/* Button Section */}
  <div className="flex justify-center sm:justify-end pt-5">
    <button className="h-[46px] w-[146px] rounded-lg border-2 border-[#088178]">
      All Members
    </button>
  </div>
</div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {team.map((i,index)=>(
                 <div
                 key={index}
                  className="text-center">
                <Image
                src={i.image}
                alt="pic"
                className="h-[324px] w-[]260px rounded-lg pb-5"/>
                <h1 className="text-lg text-center">{i.heading}</h1>
                <span className="text-[14px] text-[#088178]">{i.span}</span>
               </div>
            ))}
                </div>
            

                </SmoothAnimatedSection>
        </section>
    )
}
export default Team;