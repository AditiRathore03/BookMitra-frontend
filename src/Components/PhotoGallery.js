import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D" alt=''/>
                <img src="https://images.unsplash.com/photo-1568667256549-094345857637?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGlicmFyeXxlbnwwfHwwfHx8MA%3D%3D" alt=''/>
                <img src="https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
                <img src="https://images.unsplash.com/photo-1578511161102-485cc0775c6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3N0b3JlfGVufDB8fDB8fHww" alt=''/>
                <img src="https://images.unsplash.com/photo-1700906010457-c7a565935b81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3N0b3JlfGVufDB8fDB8fHww" alt=''/>
                <img src="https://images.unsplash.com/photo-1671202867630-c897313a0a22?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=''/>
                <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" alt=''/>
                <img src="https://images.unsplash.com/photo-1576872381149-7847515ce5d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2t8ZW58MHx8MHx8fDA%3D" alt=''/>
                <img src="https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D" alt=''/>
                <img src="https://images.unsplash.com/photo-1621827979802-6d778e161b28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D" alt=''/>
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery