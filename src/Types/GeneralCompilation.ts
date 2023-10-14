type CustomDispatch<T> = React.Dispatch<React.SetStateAction<T>>;

type UserDetailsType = {
  email?: string;
  fullName?: string;
  uid?: string;
  isOrganiser?: boolean;
  bio?: string;
  city?: string;
  profilePhoto?: string;
};
