import AnimatedTitle from "./AnimatedTitle"
import Button from "./Button"

const About = () => {
    return (
        <div className="bg-blue-50 py-24">
            <div className="flex flex-col gap-10 items-center">
                <p className="text-xs lg:text-[10px] text-center font-circular-web uppercase">wo we are</p>
                <AnimatedTitle text={
                    `we're building<br/>a new reality<br/>that rewards<br/>players and<br/>encourages<br/>communities<br/>to thrive`
                } />
                <p className="px-4 text-center">Zenty is on a mission to unite diverse player networkds to forge the world's largest shared adventure</p>
                <Button title="discover who we are" className="text-blue-100 bg-blue-200 uppercase py-4"/>
            </div>
        </div>
    )
}

export default About