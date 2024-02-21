
import prof1 from '@/assets/users/user-2.svg';
import prof2 from '@/assets/users/prof-2.svg';
import prof4 from '@/assets/users/prof-4.svg';
import may from '@/assets/background/may-full.jpg';
import sport from '@/assets/background/deportes-full.jpg';
import ico from '@/assets/icons/date.svg';
import info from '@/assets/background/info-full.jpg';
// import ParentsNew from '../parents/parentsNew';
import ProfesorNew from './profesorNew';

const ProfesorNews = ({}) => {
    return(
        <>
            <div className="flex flex-col gap-[40px]">
                <ProfesorNew edit={true} name='Manuel Alberto Rosales San Agustín' role='Profesor' time='Hoy, 10:25' title='Junta de Consejo Técnico' userImg={prof1.src} content='Litora curae tincidunt quam a netus mus erat nascetur, euismod tristique vestibulum tellus ante nisi ornare lectus sem, urna pharetra pulvinar facilisi augue himenaeos bibendum. Habitant sociis aptent vel integer ultrices aliquam mollis justo netus nec natoque, fames convallis nisl fermentum suspendisse fusce in vitae luctus venenatis tempus, nascetur a id ac ridiculus sed dui eleifend turpis ultricies. Tempor facilisi ultricies consequat montes fringilla platea feugiat, aenean quisque justo nulla condimentum malesuada, erat arcu placerat pharetra quis phasellus. Lorem ipsum dolor sit, amet consectetur adipiscing, elit ultrices. Venenatis a congue montes socils, fusce pretium maecenas. Placerat rhoncus etiam habitasse himenaeos est, venenatis sollicitudin donec. Tellus et vehicula cum faucibus, diam curabitur Sociosqu ultricies nec vitae tempor dis porta, justo ullamcorper dui lobortis. Nullam mattis phasellus lacus nam facilisi ut nisi dictum urna vehicula justo cubilia aenean, erat semper felis nisl laculis curae eros dapibus curabitur viverra scelerisque rhoncus montes rutrum, per nec leo porta ornare sociis turpis mus auctor magna libero enim.'></ProfesorNew> 
                <ProfesorNew name='Arturo Montoya Fuentes' role='Profesor' time='10 Mayo, 2023' title='¡Feliz día de las madres!' userImg={prof2.src} themeImg={may.src} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci interdum, mattis nisl non, ultrices elit. Vivamus tempus faucibus turpis vitae'></ProfesorNew>                
                <ProfesorNew edit={true} name='Manuel Alberto Rosales San Agustín' role='Profesor' time='29 Abril, 2023' title='Festival deportivo' userImg={prof1.src} themeImg={sport.src} icon={ico.src} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at orci interdum, mattis nisl non, ultrices elit. '></ProfesorNew>
                <ProfesorNew name='Lizeth Alvares Camacho' role='Profesor' time='5 julio, 2022' title='Campaña contra el bullying escolar' userImg={prof4.src} themeImg={info.src} content='Nullam mattis phasellus lacus nam facilisi ut nisi dictum urna vehicula justo cubilia aenean, erat semper felis nisl iaculis curae eros dapibus curabitur viverra scelerisque rhoncus montes rutrum, per nec leo porta ornare sociis turpis mus auctor magna libero enim. •Lorem ipsum dolor sit, amet consectetur adipiscing, elit ultrices.•Venenatis a congue montes sociis, fusce pretium maecenas.•Placerat rhoncus etiam habitasse himenaeos est, venenatis sollicitudin donec.•Tellus et vehicula cum faucibus, diam curabitur.Sociosqu purus est nullam sagittis feugiat tincidunt porta at ligula, risus magna facilisi accumsan montes per mattis suscipit malesuada lacinia, blandit enim egestas urna sapien sed penatibus dis. Nisl platea augue volutpat habitasse placerat non cubilia lacus eleifend donec, parturient tincidunt vel iaculis tellus in sociosqu aenean id, vitae suscipit etiam fames ante nulla sagittis dignissim at. Inceptos proin malesuada fringilla nascetur massa dis porttitor tristique egestas odio, nec senectus ornare litora primis ac facilisis tellus vehicula venenatis, enim justo euismod vitae tortor erat nulla nisi scelerisque. Felis suspendisse habitasse fames id primis etiam auctor pretium donec vestibulum, libero hac tincidunt ornare mollis sapien quisque conubia pulvinar duis vitae, habitant senectus curabitur hendrerit aliquet faucibus maecenas viverra proin.Vehicula commodo in vivamus lectus at eleifend interdum congue, maecenas mollis dapibus inceptos integer quam neque, dictumst phasellus porttitor praesent aliquam ac duis torquent, id curae penatibus ultricies taciti venenatis. Hendrerit sollicitudin nibh ornare tristique, sodales fames nisl cras interdum, tortor porta cum. Arcu ad auctor tempus consequat montes penatibus ornare euismod, nisi faucibus inceptos quis pretium curabitur mi fames, lacus magna primis massa felis nascetur quam. '></ProfesorNew>
            </div>            
        </>
    )
}

export default ProfesorNews;