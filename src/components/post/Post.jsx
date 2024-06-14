import './Post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg'
        src="Screenshot.png" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Length convetor
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'> I have just completed a length convetor using Java Script! This handly tool allows users to seamlessly convert between various units of length, including meters, kilometers,mils.feet,and inches. </p>
    </div>
  )
}
