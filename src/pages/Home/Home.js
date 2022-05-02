import { HomeContainer, Navigation, Buttons, Search, Content} from "./style"
import Header from "./components/Header"
import SectionButton from "./components/Button"
import { useState } from "react"
import ByDisciplinesContent from "./components/ByDisciplinesContent"
import CreateTests from "./components/CreateTests"
import ByTeachersContent from "./components/ByTeacherContent"

export default function Home() {

    const [section, setSection] = useState('DISCIPLINAS');
    
    return (
        <HomeContainer>
            <Header/>
            <Navigation>
                <Buttons>
                    <SectionButton name='DISCIPLINAS' section={section} setSection={setSection}/>
                    <SectionButton name='PESSOA INSTRUTORA' section={section} setSection={setSection}/>
                    <SectionButton name='ADICIONAR' section={section} setSection={setSection}/>
                </Buttons>    
            </Navigation>
            {section === 'DISCIPLINAS' && <ByDisciplinesContent section={section}/>}
            {section === 'PESSOA INSTRUTORA' && <ByTeachersContent section={section}/>}
            {section === 'ADICIONAR' && <CreateTests/>}   
        </HomeContainer>
    )
}