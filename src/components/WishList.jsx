import { Item } from "./Item"

export const WishList = ({wishList}) => {
  return (
    <div className="wish-list-container">
        {
            wishList.map((item) => (
                <Item key = {item.id}  { ...item }/>
            ))
        }
    </div>
  )
}
