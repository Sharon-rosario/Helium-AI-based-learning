import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Image, { StaticImageData } from "next/image";
import { useDispatch } from "react-redux";
import { cart_product } from "@/redux/slices/cartSlice";
import { productsType } from "@/interFace/interFace";
import { wishlist_product } from "@/redux/slices/wishlist-slice";

interface Course {
  id: number;
  img: StaticImageData;
  price?: number | undefined;
  tutorImg: StaticImageData;
  authorName: string;
  level: string;
  category: string;
  clock: string;
  videoUrl: string;
  quantity?:number;
}
const CourseDetailsSidebar: React.FC<{ course: Course }> = ({ course }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setvideoId] = useState("");
  const openVideoModal = (id: any) => {
    setIsOpen(!isOpen);
    setvideoId(id);
  };
  const dispatch = useDispatch();
  const handleAddToCart = (product: productsType) => {
    dispatch(cart_product(product));
  };
  return (
    <>
      <div className="course-video-widget">
        <div className="course-widget-wrapper mb-30">
          <div className="course-video-thumb w-img">
            {course.img && (
              <Image
                src={course.img}
                style={{ width: "100%", height: "auto" }}
                alt="img not found"
              />
            )}
            <div className="sidber-video-btn">
              <span
                className="popup-video"
                onClick={() => {
                  openVideoModal(course.videoUrl);
                }}
              >
                <i className="fas fa-play"></i>
              </span>
            </div>
          </div>
          <div className="course-video-price">
            <span>
              {course.price === 0 ? "FREE": `$${course.price}.00`}
            </span>
          </div>
          <div className="course-video-body">
            <ul>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-filter"></i>
                  <span>Level</span>
                </div>
                <div className="video-corse-info">
                  <span>{course.level}</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-computer"></i>
                  <span>Lectures</span>
                </div>
                <div className="video-corse-info">
                  <span>8 Lectures</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-clock"></i>
                  <span>Duration</span>
                </div>
                <div className="video-corse-info">
                  <span>{course.clock}</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-menu-2"></i>
                  <span>Category</span>
                </div>
                <div className="video-corse-info">
                  <span>{course.category}</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-global"></i>
                  <span>Laguage</span>
                </div>
                <div className="video-corse-info">
                  <span>English</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-bookmark-white"></i>
                  <span>Access</span>
                </div>
                <div className="video-corse-info">
                  <span>Full Lifetime</span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-award"></i>
                  <span>Certificate</span>
                </div>
                <div className="video-corse-info">
                  <span>Yes </span>
                </div>
              </li>
              <li>
                <div className="course-vide-icon">
                  <i className="flaticon-list"></i>
                  <span>Recourse</span>
                </div>
                <div className="video-corse-info">
                  <span>5 Downloadable Files </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="video-wishlist">
            <button
              onClick={() => handleAddToCart(course)}
              className="video-cart-btn"
            >
              <i className="fal fa-shopping-cart"></i>Add to cart
            </button>
            <button type="button" className="video-wishlist-btn" onClick={() => dispatch(wishlist_product(course))}>
              <i className="far fa-heart"></i>Add to Wishlist
            </button>
          </div>
          <div className="course-gift">
            <div className="course-apply-coupon">
              <Link href="#">Apply Coupon</Link>
            </div>
            <div className="course-gift-coupon">
              <Link href="#">Gift Courses</Link>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default CourseDetailsSidebar;
