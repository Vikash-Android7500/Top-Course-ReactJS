import React from "react";
// import {FcLinux, FcLikePlaceholder } from "react-icons/fc";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { toast } from "react-hot-toast";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    //logic
    if (likedCourses.includes(course.id)) {
      //pehle se like hua pada tha
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.error("Un Liked Course");
    } else {
      //pehle se like nahi hai ye course
      //insert karna h ye course liked courses me
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        //non-empty pehle se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Course");
    }
  }
  return (
    <main className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <section className="relative">
        <img src={course.image.url} alt="courseImg" />

        <section
          className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center"
        >
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <AiFillLike fontSize="1.75rem" color="green" />
            ) : (
              <AiOutlineLike fontSize="1.75rem" />
            )}
          </button>
        </section>
      </section>

      <section className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </section>
    </main>
  );
};

export default Card;
