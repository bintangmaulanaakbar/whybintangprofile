import fundamental from '../assets/feature-img/fundamental.png'
import blog from '../assets/feature-img/blog.png'
import project from '../assets/feature-img/project.png'
import template from '../assets/feature-img/template.png'
import '../style/Sidebar.css'
import '../Fonts/Fonts.css'

const Sidebar = () => {
    return (
        <div className="panel">
            <div className="card">
                <h2 className='title'>Early Fundamentals</h2>
                <div className='sidebar-card'>
                    <img src={fundamental}/>
                    <p className='description'>Cari dan latih fundamental basis program kalian</p>
                </div>
            </div>
            <div className="card">
                <h2 className='title'>Programming Blogs</h2>
                <div className='sidebar-card'>
                    <img src={blog}/>
                    <p className='description'>Bacalah blog pemrograman lebih lanjut</p>
                </div>
            </div>
            <div className="card">
                <h2 className='title'>Project Result</h2>
                <div className='sidebar-card'>
                    <img src={project}/>
                    <p className='description'>Pamerkan hasil project yang kalian telah pelajari</p>
                </div>
            </div>
            <div className="card">
                <h2 className='title'>Provide Templates</h2>
                <div className='sidebar-card'>
                    <img src={template}/>
                    <p className='description'>Gunakan template yang menarik user kalian</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar