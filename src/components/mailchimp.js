// import React from "react";
// import MailchimpSubscribe from "react-mailchimp-subscribe";

// const CustomForm = ({ status, message, onValidated }) => {

//   const [email, setEmail] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   return ();
// };

// const MailChimpFormContainer = props => {

//   const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
  
//   return (
//     <div>
//         <MailchimpSubscribe 
//           url={postUrl}
//           render={({ subscribe, status, message }) => (
//             <CustomForm
//                 status={status} 
//                 message={message}
//                 onValidated={formData => subscribe(formData)}
//             />
//           )}
//         />
//     </div>
//   );  
// };

// export default MailChimpFormContainer;