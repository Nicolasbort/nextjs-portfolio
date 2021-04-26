import SkillList from '../lib/SkillList'
import SkillTag from '../components/SkillTag'

export default function Filter(props) {      
    return (     
        <div className="row my-5">
            <div className="col-12">
                <p className="text-center fw-bold fs-4">{props.name}</p>
                <div className="text-center">
                    {SkillList.skills.map( skill => {
                        return (
                            <SkillTag disabled={false} name={skill}/>
                        )
                    } )}
                </div>
            </div>
        </div>
    )
}