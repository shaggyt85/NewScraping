'use client'

import { FormEvent, useState } from "react";
import { isValidAmazonProductURL } from "@/utils/ValidUrl";
import { scrapeAndStoreProduct } from "@/lib/actions";

const Searchbar  = () => {
  const [searchPrompt, setSearchPrompt] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidLink = isValidAmazonProductURL(searchPrompt)
    if(!isValidLink) return alert('Please provide a valid Amazon link')
      
    try {
      setIsLoading(true);

      // Scrape the product page
      const product = await scrapeAndStoreProduct(searchPrompt);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  ;
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
        <input type="text" value={searchPrompt} onChange={(e) => setSearchPrompt(e.target.value)} name="search" placeholder="Enter product link" className="searchbar-input" />
        <button type="submit" className="searchbar-btn" disabled={searchPrompt === ''}>{isLoading ? 'Loading...' : 'Search'}
        </button>
    </form>
  )
}

export default Searchbar