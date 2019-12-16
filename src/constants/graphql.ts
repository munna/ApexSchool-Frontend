import gql from 'graphql-tag'
export const LOGIN_MUTATION = gql`mutation login ($email:String!,$password: String!){
    Login(password:$password, email:$email) {accessToken,name,email}
  }
`
export const PROFILE_QUERY = gql`{
  Me { email, firstName, lastName }
}
`
