class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        Arrays.fill(result,1);
        
        for(int i = 1; i<n;i++){
            result[i]=nums[i-1]*result[i-1];
        }
        int flagFix = 1;
        for(int i =n-1;i>=0;i--){
            result[i]=result[i]*flagFix;
            flagFix=flagFix*nums[i];
        }
        return result;
    }
}  
