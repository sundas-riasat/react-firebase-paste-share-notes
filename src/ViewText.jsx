import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, doc, getDoc, collection, getDocs, where, query } from "./firebase";

function ViewText() {
    const { id } = useParams();
    const [text, setText] = useState('Loading...')

    useEffect(() => {
        const fetchText = async () => {
            if (!id) {
                console.error("No ID found in URL.");
                setText("Invalid ID.");
                return;
            }

            try {
                const q = query(collection(db, "notes"), where("id", "==", id));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const docData = querySnapshot.docs[0].data();
                    console.log("✅ Document found:", docData);
                    setText(docData.text);
                } else {
                    console.warn("⚠️ Document does not exist.");
                    setText("Text not found or expired.");
                }
            } catch (error) {
                console.error("❌ Error fetching document:", error);
                setText("Error retrieving text.");
            }
        };
        fetchText();
    }, [id])
    return (<div className="bg-gray-200 text-2xl p-4 m-0 h-screen w-full">
        <p>{text}</p>
    </div>);
}

export default ViewText;