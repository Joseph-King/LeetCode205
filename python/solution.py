class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        mapS = {}
        mapT = {}
        for i in range(len(s)):
            if s[i] in mapS and mapS[s[i]] != t[i]:
                return False
            elif t[i] in mapT and mapT[t[i]] != s[i]:
                return False
            else:
                mapS[s[i]] = t[i]
        
        return True

sol = Solution()

s1 = 'egg'
t1 = 'add'

s2 = 'foo'
t2 = 'bar'

s3 = 'paper'
t3 = 'title'

print(sol.isIsomorphic(s1, t1))
print(sol.isIsomorphic(s2, t2))
print(sol.isIsomorphic(s3, t3))
