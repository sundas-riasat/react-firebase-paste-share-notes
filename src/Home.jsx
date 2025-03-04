import { useState } from 'react'
import { db, collection, addDoc } from './firebase'
import { nanoid } from 'nanoid'
import { BrowserRouter as useNavigate } from 'react-router-dom'


function Home() {
    const [isLinkReady, setIsLinkReady] = useState(false)
    const [link, setLink] = useState('')
    const [text, setText] = useState('');

    const handleMessageChange = (e) => {
        setText(e.target.value)
    }

    const saveMessage = async () => {
        if (!text.trim()) return;
        const id = nanoid(10);
        await addDoc(collection(db, 'notes'), { id, text, createdAt: Date.now() })
        console.log('Document written with ID: ', id);
        setLink(`${window.location.origin}/${id}`)
        setIsLinkReady(true)
    }
    return (
        <>
            <div className='bg-white text-black border-0 m-0 w-full h-screen p-5 text-center'>
                <h1 className='text-4xl'>Paste & Share</h1>

                <div className="grid grid-cols-1 max-w-2xl m-auto">
                    <textarea className='w-full h-48 border rounded border-gray-200 p-2 mt-5' placeholder='Paste your text here' value={text} onChange={handleMessageChange}></textarea>
                    <button onClick={saveMessage} className='bg-pink-200 hover:bg-pink-300 text-black py-4 px-8 rounded mt-5'>Share</button>
                </div>

                <div className='mt-8'>
                    {isLinkReady && <p className='mb-4'>Your link is ready to be shared. Click to copy.</p>}
                    {isLinkReady && (<span className='w-max max-w-lg m-8 bg-blue-200 text-black font-mono p-4'>{link}</span>)}
                </div>
            </div>
        </>
    )
}

export default Home
