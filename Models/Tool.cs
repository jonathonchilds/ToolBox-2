using System.ComponentModel.DataAnnotations;

namespace ToolBox.Models
{
    public class Tool
    {
        public int Id { get; set; } = 0;

        [Required(ErrorMessage = "Name is required.")]
        public string Name { get; set; } = "";

        public string ImageUrl { get; set; } = "";

        public bool Rent { get; set; } = false;

        [RequiredIf("Rent", true, "Rent price is required.")]
        public int? RentPrice { get; set; } = null;

        public bool Borrow { get; set; } = false;


        public int? BorrowPrice { get; set; } = null;

        public bool Purchase { get; set; } = false;

        [RequiredIf("Purchase", true, "Purchase price is required.")]
        public int PurchasePrice { get; set; } = 0;
    }

    public class RequiredIfAttribute : ValidationAttribute
    {
        private readonly string _propertyName;
        private readonly bool _propertyValue;

        public RequiredIfAttribute(string propertyName, bool propertyValue, string errorMessage)
        {
            _propertyName = propertyName;
            _propertyValue = propertyValue;
            ErrorMessage = errorMessage;
        }

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            var property = validationContext.ObjectType.GetProperty(_propertyName);
            if (property == null)
            {
                return new ValidationResult($"Property {_propertyName} not found.");
            }

            var propertyValue = (bool)property.GetValue(validationContext.ObjectInstance, null);
            if (propertyValue == _propertyValue && value == null)
            {
                return new ValidationResult(ErrorMessage);
            }

            return ValidationResult.Success;
        }
    }
}
