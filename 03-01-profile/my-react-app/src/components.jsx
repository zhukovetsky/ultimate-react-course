export function Header({photo, name}) {
    return (
        <>
            <img className="avatar" src={photo} alt={name + ' photo'}></img>
        </>
    );
}

export function Summary({text, name}) {
    return (
        <>
            <h1>{name}</h1>
            <p>{text}</p>
        </>
    );
}

export function SkillsList({skills}) {
    const levels = [ '🫦', '👍️', '🙏'];
    const colors = ['red', 'green', 'blue', 'orange'];
    
    return (
        <div className="skill-list">
            {skills.map((s, i) => <Skill color={colors[i%colors.length]} skill={s} level={levels[i%levels.length]} />)}
        </div>
    );
}

export function Skill({skill, level, color}) {
    return (
        <div style={{backgroundColor: color ?? 'yellow'}} className="skill">
            <span>{skill}</span>
            <span>{level}</span>
        </div>
    )
}