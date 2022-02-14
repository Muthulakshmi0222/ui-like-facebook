import './App.css';
import PrimarySearchAppBar from './Home';
import styles from './Appmodule.css'
import Post from './components/Post'
import PostComposer from './components/PostComposer'
import React, { useState } from 'react'

function App() {
  const [isPostComposerActive, setPostComposerState] = useState(false);

  const [posts, setPosts] = useState([]);

  const openPostComposer = e => {
    setPostComposerState(true);
  }

  return (
    <div className="App">
      <PrimarySearchAppBar />

      <main className={styles.contentArea}>
        <button className={styles.createPostBtn} onClick={openPostComposer}>Create Post</button>
        <h2 className={styles.heading}>All Posts</h2>
        <section>
          {
            posts.map((post, index) => <Post key={index} msg={post.msg} gifs={post.gifs} />)
          }
        </section>
      </main>
      {
        isPostComposerActive && (
          <PostComposer 
            setPosts={setPosts} 
            setPostComposerState={setPostComposerState} 
          />
        )
      }
      
    </div>
  );
}


export default App;
