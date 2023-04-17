import { useState } from "react";
import Nav from "../components/Nav";

const Onboarding = () => {

  const [formData, setFormData] = useState({
    user_id: '',
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    book_name: '',
    author_name: '',
    show_genre: false,
    genre: 'fiction',
    genre_interest: 'romance',
    email: '',
    url: '',
    about: '',
    matches: []
  })

  const handleSubmit = ()=>{
    console.log('submitted')
  }

  const handleChange = (e)=>{
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name] : value
    }))
  }


  console.log(formData)

  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="first_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />

              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />

              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>

            <label htmlFor="book_name">Book Name</label>
            <input
              id="book_name"
              type="text"
              name="book_name"
              placeholder="Book Name"
              required={true}
              value={formData.book_name}
              onChange={handleChange}
            />

            <label htmlFor="author_name">Author Name</label>
            <input
              id="author_name"
              type="text"
              name="author_name"
              placeholder="Author Name"
              required={true}
              value={formData.author_name}
              onChange={handleChange}
            />

            <label>Genre</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-identity"
                type="radio"
                name="genre"
                value="fiction"
                onChange={handleChange}
                checked={formData.genre === 'fiction'}
              />
              <label htmlFor="man-gender-identity">Fiction</label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="genre"
                value="romance"
                onChange={handleChange}
                checked={formData.genre === 'romance'}
              />
              <label htmlFor="woman-gender-identity">Romance</label>
              <input
                id="more-gender-identity"
                type="radio"
                name="genre"
                value="novel"
                onChange={handleChange}
                checked={formData.genre === 'novel'}
              />
              <label htmlFor="more-gender-identity">Novel</label>
            </div>

            <label htmlFor="show-gender">Show Genre on my Profile</label>

            <input
              id="show-gender"
              type="checkbox"
              name="show_genre"
              onChange={handleChange}
              checked={formData.show_genre}
            />

            <label>Show Genre</label>

            <div className="multiple-input-container">
              <input
                id="man-gender-interest"
                type="radio"
                name="genre_interest"
                value="fiction"
                onChange={handleChange}
                checked={formData.genre_interest === 'fiction'}
              />
              <label htmlFor="man-gender-interest">Fiction</label>
              <input
                id="woman-gender-interest"
                type="radio"
                name="genre_interest"
                value="romance"
                onChange={handleChange}
                checked={formData.genre_interest === 'romance'}
              />
              <label htmlFor="woman-gender-interest">Romance</label>
              <input
                id="everyone-gender-interest"
                type="radio"
                name="genre_interest"
                value="novel"
                onChange={handleChange}
                checked={formData.genre_interest === 'novel'}
              />
              <label htmlFor="everyone-gender-interest">Novel</label>
            </div>

            <label htmlFor="about">About Book</label>
            <input
              id="about"
              type="text"
              name="about_book"
              required={true}
              placeholder="I like long walks..."
              value={formData.about}
              onChange={handleChange}
            />

            <input type="submit" />
          </section>

          <section>
            <label htmlFor="url">Book Image</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container">
              {formData.url && (
                <img src={formData.url} alt="profile pic preview" />
              )}
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;