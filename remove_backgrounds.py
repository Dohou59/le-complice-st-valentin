from rembg import remove
from PIL import Image
import os

# Directories
input_dir = r"m:\Le complice\images icon"
output_dir = r"m:\Le complice\public\icons"

# Ensure output directory exists
os.makedirs(output_dir, exist_ok=True)

# List of icon files
icon_files = [
    "Ballon.jpeg",
    "Cadeau.jpeg",
    "Cadenas.jpeg",
    "Camion.jpeg",
    "Coeur broder.jpeg",
    "Coeur ruban.jpeg",
    "Etreinte.jpeg",
    "Maison.jpeg",
    "Matiere.jpeg",
    "Nuage.jpeg",
    "Taille.jpeg",
    "Whisk_b0783c765c206d0873d44f7e3c5fa382dr (1).jpeg",
    "Yeux.jpeg",
    "coche.jpeg"
]

print("Starting background removal...")
for filename in icon_files:
    input_path = os.path.join(input_dir, filename)
    # Change extension to .png for transparency support
    output_filename = filename.replace('.jpeg', '.png')
    output_path = os.path.join(output_dir, output_filename)
    
    try:
        # Open image
        input_image = Image.open(input_path)
        
        # Remove background
        output_image = remove(input_image)
        
        # Save as PNG with transparency
        output_image.save(output_path)
        
        print(f"✓ Processed: {filename} -> {output_filename}")
    except Exception as e:
        print(f"✗ Error processing {filename}: {str(e)}")

print("\nBackground removal complete!")
print(f"Processed images saved to: {output_dir}")
