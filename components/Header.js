import Navbar from '@components/Navbar'

export default function Header({ title }) {
  return <div>
          <h1 className="title">{title}</h1>
          <Navbar></Navbar>
        </div>
}
