import { useEffect, useRef, useState } from "react";
import api from "../../api/axiosConfig";
import { useParams } from "react-router-dom";
import { container, Row, Col, Container } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

import React from "react";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const [review, setReview] = useState("");

  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: review,
        imdbId: movieId,
      });

      const updatedReviews = [...reviews, { body: review }];

      setReviews(updatedReviews);
      setReview("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    setReview={setReview}
                    review={review}
                    labelText="Write a Review?"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((review, index) => {
            return (
              <Row key={index}>
                <Col>{review.body}</Col>
                <hr /> 
              </Row>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
