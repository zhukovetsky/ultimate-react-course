import {Header, Summary, SkillsList} from './components'
import photo from './assets/hero.png'
import './App.css'

function App() {
  const hero = {
    name: "John Doe",
    summary: "I'm so fucking awesome",
    photo: photo,
    skills: [ "JavaScript", "Java", "Squirt", "CSS", "SQL", "Golang" ]
  };

  return (
    <div className='card'>
      <Header name={hero.name} photo={hero.photo}></Header>
      <div className='data'>
        <Summary name={hero.name} text={hero.summary}></Summary>
        <SkillsList skills={hero.skills}></SkillsList>
      </div>
    </div>
  )
}

export default App
