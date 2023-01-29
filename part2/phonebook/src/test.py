def count_internal_nodes(tree):
    internalCount = 0
    parents = list(set(tree))
    print(parents)
    return len(tree) - len(parents)

tree = [1, 3, 1, -1, 3]
#tree[i] is the parent of node i
#3 is the parent of node 
print (count_internal_nodes(tree)) # should print 2