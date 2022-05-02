export default function SectionButton({name, setSection, section}) {

    return(
        <button className={section === name ? 'selected' : 'not-selected'} onClick={() => setSection(name)}>{name}</button>
    )
}