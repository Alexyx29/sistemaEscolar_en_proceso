import Login from '@/components/auth/login';
import bgScoil from '@/assets/background/bg_1.jpg';
import ScoilLayout from '@/layout/scoil';

export default function App() {
    return(
        <>
            <div className='flex top-0 bottom-0 fixed w-[100%] overflow-y-auto' style={{backgroundImage: `url(${bgScoil.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <Login></Login>            
            </div>            
        </>
    )
}