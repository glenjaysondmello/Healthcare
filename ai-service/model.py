# train_model.py
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import KNeighborsClassifier

# Sample data (input, response)
input_texts = [
    "Hello", "How are you?", "Tell me about health", "What is AI?", "Goodbye"
]
responses = [
    "Hi there!", "I'm doing well, thank you!", "Health is wealth!", "AI is artificial intelligence!", "Goodbye!"
]

# Vectorize input texts
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(input_texts)

# Train a simple model (KNN in this case)
model = KNeighborsClassifier(n_neighbors=1)
model.fit(X, responses)

# Save the vectorizer and the model
joblib.dump(vectorizer, 'vectorizer.joblib')
joblib.dump(model, 'model.joblib')

print("Model trained and saved!")
