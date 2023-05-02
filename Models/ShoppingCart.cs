using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;


namespace ToolBox.Models
{
    public class ShoppingCart
    {
        private readonly ISession _session;

        public ShoppingCart(ISession session)
        {
            _session = session;
        }

        public void AddProduct(int productId, int quantity)
        {
            var cart = GetCart();

            if (cart.ContainsKey(productId))
            {
                cart[productId] += quantity;
            }
            else
            {
                cart[productId] = quantity;
            }

            SaveCart(cart);
        }

        public void RemoveProduct(int productId)
        {
            var cart = GetCart();

            if (cart.ContainsKey(productId))
            {
                cart.Remove(productId);
                SaveCart(cart);
            }
        }

        public Dictionary<int, int> GetCart()
        {
            var cart = _session.Get<Dictionary<int, int>>("cart");

            return cart != null ? cart : new Dictionary<int, int>();
        }

        private void SaveCart(Dictionary<int, int> cart)
        {
            _session.Set("cart", cart);
        }
    }
}