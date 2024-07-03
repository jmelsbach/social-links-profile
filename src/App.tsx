import Button from './components/Button';
import './App.css'
import profilePicture from './assets/images/avatar-jessica.jpeg'

function App() {

  const menuItems: string[] = ['GitHub', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram']
  
  return (
   <main className="flex flex-col items-center justify-center bg-[#1F1F1F] w-min p-6 xl:p-10 rounded-[12px] font-sans">
    <img className="rounded-full w-[88px] mb-6" src={profilePicture} alt="profile picture" />
    <h1 className="text-2xl text-white">Jessica Randall</h1>
    <p className="text-sm text-[#C4F82A] font-semibold">London, United Kingdom</p>
    <p className="text-sm text-white m-6 text-center w-[100%]">"Front-end Developer and avid reader."</p>

    <div className="flex flex-col gap-4">
      {menuItems.map((item, index) => 
        <Button key={index} text={item}></Button>
      )}
    </div>
      
   </main> 
  )
}
export default App
